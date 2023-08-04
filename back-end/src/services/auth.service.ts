import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import byCrypt from 'bcryptjs';
import { signAccessToken } from '../utils/jwt/jwt.util';
import httpErrors from 'http-errors';
import { debug } from 'console';

dotenv.config();
const prisma = new PrismaClient();

//TODO: Add username field to be generated automatically according to user first and last name
//TODO: Add verification to see if the user already exists and return an error
//TODO: Add account reset system, allowing the user to update password
export const registerUser = async (username: string, password: string) => {
  password = byCrypt.hashSync(password, 8);
  let newUser = await prisma.user.create({
    data: {
      password,
      email: username,
    },
  });

  return {
    username,
    email: username,
    token: await signAccessToken(newUser),
  };
}

export const loginUser = async (username: string, password: string) => {
  const result = await prisma.user.findUnique({
    where: {
      email: username,
    }
  });

  if (!result) {
    throw httpErrors.NotFound('User not registered');
  } else {
    const checkPassword = byCrypt.compareSync(password, result.password as string)
    if (!checkPassword) {
      throw httpErrors.Unauthorized('Email or password incorrect!');
    } else {
      const accessToken = await signAccessToken(result);
      return {
        email: result.email,
        accessToken,
      };
    }
  }
};

// Functions used for test while developing
//
//
// export const getAllUsers = async () => {
//   const users = await prisma.user.findMany();
//   return users;
// }
//
// export const registerDummyUser = async () => {
//   await prisma.user.create({
//     data: {
//       password: '$2a$08$8iyDkdYUTnME/Slb9.9r8ORJsutFqkYnPRMTn5PD2RCqzw99b75ZW',
//       email: 'alice__Mabote011@cip.io',
//     },
//   });

//   const users = await prisma.user.findMany();
//   return users;
// };

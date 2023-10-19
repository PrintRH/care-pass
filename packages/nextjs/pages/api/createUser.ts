import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "~~/services/prisma";

// type ResponseData = {
//   message: string;
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, name, role, loginType, walletAddress } = req.body;
    try {
      const user = await prisma.user.create({
        data: {
          email,
          name,
          role,
          loginType,
          walletAddress,
        },
      });
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

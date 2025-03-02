import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { db } from "~/server/db";

export const userRouter = createTRPCRouter({
	findOne: publicProcedure
		.input(z.object({ id: z.string() }))
		.query(async ({ input }) => {
			const user = await db.user.findFirst({ where: { id: input.id } });

			return { user };
		}),
});

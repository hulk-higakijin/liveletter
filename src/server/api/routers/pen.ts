import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { api } from "~/trpc/server";

export const penRouter = createTRPCRouter({
	create: protectedProcedure
		.input(z.object({ content: z.string(), postId: z.string() }))
		.mutation(async ({ ctx, input }) => {
			const { post } = await api.post.findOne({ id: input.postId });

			if (post?.createdById !== ctx.session.user.id) {
				return ctx.db.pen.create({
					data: { ...input },
				});
			}
		}),

	getByPostId: publicProcedure
		.input(z.object({ postId: z.string() }))
		.query(async ({ ctx, input }) => {
			const pens = await ctx.db.pen.findMany({
				where: { postId: input.postId },
			});

			return { pens };
		}),
});

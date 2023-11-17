import { router, publicProcedure } from '../trpc';
import { observable } from '@trpc/server/observable';
import { clearInterval } from 'timers';

export const appRouter = router({
	healthcheck: publicProcedure.query(() => 'yay!'),

	// TODO: Add the router for Canvas here

	randomNumber: publicProcedure.subscription(() => {
		return observable<number>((emit) => {
			const int = setInterval(() => {
				emit.next(Math.random());
			}, 500);

			return () => {
				clearInterval(int);
			};
		});
	}),
});

export type AppRouter = typeof appRouter;
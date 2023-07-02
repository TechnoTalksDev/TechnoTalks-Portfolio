import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (({ locals }) => {

  throw redirect(307, "https://discord.com/api/oauth2/authorize?client_id=879790233099587595&permissions=139653925952&scope=applications.commands%20bot");

}) satisfies LayoutServerLoad;
import pokemon from 'pokemon'

export default {
	fetch() {
		return new Response(`Running in ${navigator.userAgent}! Here is a pokemon: ${pokemon.random()}.`);
	},
};

<template>
	<section class="address c_shade-n4 p-l_0:md p-y_0:md p-y_3">
		<address>
			<!-- http://microformats.org/wiki/hcard -->
			<h4
				v-if="institution != ''"
				class="m-b_1 font_normal font_display font_regular font_1"
			>{{institution}}</h4>
			<div class="flex flex_column flex_row:md c_black-8 font_n1 lh_0 font_ui">
				<ul class="flex_auto p-r_4 ul_none w_10:md w_50:lg">
					<li class="m-b_1 m-b_2:md font_normal">
						<span class="street-address">{{street_1}}</span>
					</li>
					<li v-if="street_2 != ''" class="m-b_1 m-b_2:md font_normal">
						<span class="street-address">{{street_2}}</span>
					</li>
					<li class="m-b_1 m-b_2:md font_normal">
						<span class="locality">{{city}}</span>,
						<span class="city-name">{{state}}</span>
						<span class="postal-code">{{zip}}</span>
					</li>
					<li v-if="country != ''" class="m-b_1 m-b_2:md font_normal">
						<span class="country">{{country}}</span>,
					</li>
				</ul>
			</div>
		</address>
	</section>
</template>

<script>
export default {
	name: "address-block",
	props: {
		institution: {
			type: String,
			default: ""
		},
		street_1: {
			type: String,
			default: "2400 N. St. NW"
		},
		street_2: {
			type: String,
			default: ""
		},
		city: {
			type: String,
			default: "Washington"
		},
		state: {
			type: String,
			default: "DC"
		},
		zip: {
			type: String,
			default: "20007"
		},
		country: {
			type: String,
			default: ""
		}
	},
	methods: {},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
</style>
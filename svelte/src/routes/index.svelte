<script lang="ts">
	import Scatterplot from '../components/Scatterplot.svelte';
	import { onMount } from 'svelte';
	import Papa from 'papaparse';

	let data = [] as any;
	let plotthis;

	onMount(async () => {
		let csv = await (await fetch('../cars-sample.csv')).text();
		data = Papa.parse(csv, { header: true }).data;
	});

	console.log(data);

	let getColorForBrand = (brand) => {
		if( brand == 'bmw') return "orange"
		else if( brand == 'ford') return "brown"
		else if( brand == 'honda') return "green"
		else if( brand == 'mercedes') return "lightblue"
		else if( brand == 'toyota') return "pink"
	}

	$: plotthis = data.filter((d) => !isNaN(+d.Weight) && !isNaN(+d.MPG)).map((d) => {
		return {
            x: +d.Weight,
            y: +d.MPG,
            size: (+d.Weight / 2000) ** 2,
            color: getColorForBrand(d.Manufacturer)
		};
	});

    $: console.log(plotthis)

</script>

{#if { plotthis }}
	<Scatterplot data={plotthis} 
	minPoint={{x:1400, y:44}} 
	maxPoint={{x: 5800, y: 0}} 
	xTickCount={9} 
	yTickCount={5}
	legend={
		[
			{
				name: 'bmw',
				color: getColorForBrand('bmw')
			},
			{
				name: 'mercedes',
				color: getColorForBrand('mercedes')
			},
			{
				name: 'toyota',
				color: getColorForBrand('toyota')
			},
			{
				name: 'honda',
				color: getColorForBrand('honda')
			},
			{
				name: 'ford',
				color: getColorForBrand('ford')
			},
		]
	} />
{/if}

<style>
    Scatterplot {
        width: 100vw;
        min-height: 50vh;
        display: block;
    }
</style>
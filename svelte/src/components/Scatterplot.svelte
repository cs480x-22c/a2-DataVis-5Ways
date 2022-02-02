<script lang="ts">
	import { onMount } from 'svelte';
	interface point {
		x: number;
		y: number;
        size?: number;
        color?: string;
	}
	export let data: point[];
	export let minPoint: point;
	export let maxPoint: point;
	export let xTickCount: number;
	export let yTickCount: number;
    export let precision: number = 2;
	export let legend: {
		name: string,
		color: string
	}[] = [];

	let svg: SVGElement;
	$: width = 1000;
	$: height = 1000;

	let xTicks = linspace(minPoint.x, maxPoint.x, xTickCount);
	let yTicks = linspace(minPoint.y, maxPoint.y, yTickCount);

	const padding = { top: 50, right: 50, bottom: 50, left: 50 };
	$: xScale = (x) => (x - minPoint.x) * ((width - padding.right - padding.left)/(maxPoint.x - minPoint.x)) + padding.left

	$: yScale = (y) => (y - minPoint.y) * ((height - padding.top - padding.bottom)/(maxPoint.y - minPoint.y)) + padding.bottom
	onMount(resize);
	function resize() {
		({ width, height } = svg.getBoundingClientRect());
	}

	function linspace(start: number, stop: number, steps: number): number[] {
		var arr = [];
		var step = (stop - start) / (steps - 1);
		for (var i = 0; i < steps; i++) {
			arr.push(start + step * i);
		}
		return arr;
	}
</script>

<svelte:window on:resize={resize} />

<svg bind:this={svg}>

	<g class="legend" transform="translate({width * 0.8}, {height * 0.2})" > 
		<text y="-14">Manufacturer</text>
		{#each legend as cat, index}
		<g transform="translate(0, {index * height * .05})">
			<circle cx={0} cy={0} r={5} fill={cat.color} />
			<text x={24} y="0">{cat.name}</text>
		</g>
		{/each}
	</g>

	<g class="legend" transform="translate({width * 0.8}, {height * 0.6})" > 
		<text y="-14">size</text>
		{#each [2000, 3000, 4000] as size, index}
		<g transform="translate(0,{ index * height * .05})">
			<circle cx={0} cy={0} r={(size/2000) ** 2} />
			<text x={24} y="0">{size}</text>
		</g>
		{/each}
	</g>

	<g class="axis y-axis">
		{#each yTicks as tick}
			<g class="tick tick-{tick.toPrecision(precision)}" transform="translate(0, {yScale(tick)})">
				<line x1={padding.left} x2={xScale(maxPoint.x)} />
				<text x={padding.left - 8} y="+4">{tick}</text>
			</g>
		{/each}
	</g>

	<g class="axis x-axis">
		{#each xTicks as tick}
			<g class="tick" transform="translate({xScale(tick)},0)">
				<line y1={yScale(0)} y2={yScale(maxPoint.y)} />
				<text y={height - padding.bottom + 16}>{tick.toPrecision(precision)}</text>
			</g>
		{/each}
	</g>

	<!-- data -->
	{#each data as point}
		<circle cx={xScale(point.x)} cy={yScale(point.y)} r={point.size} fill={point.color} />
	{/each}
</svg>

<style>
	svg {
		height: 50vh;
		width: 100%;
	}
	circle {
		fill-opacity: 0.5;
		stroke: rgba(0, 0, 0, 0.5);
	}
	.tick line {
		stroke: #222;
		stroke-dasharray: 2;
	}
	text {
		font-size: 12px;
		fill: #999;
	}
	.x-axis text {
		text-anchor: middle;
        writing-mode: vertical-rl;
	}
	.y-axis text {
		text-anchor: end;
	}
</style>

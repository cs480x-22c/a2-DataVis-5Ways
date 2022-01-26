set ylabel 'MPG'
set xlabel 'Weight'
set grid
set term png size 1920,1080
set output 'output.png'
set datafile separator comma
set style fill transparent solid .125 border
plot 'cars-sample.csv' using 8:(stringcolumn(3) eq "bmw"? $4:1/0):($8>4000 ? 50 : $8>3000 ? 40 : $8>2000 ? 30 : $8>1000 ? 20 : 10) with circles title "bmw" lc rgb "blue",\
					"" using 8:(stringcolumn(3) eq "toyota"? $4:1/0):($8>4000 ? 50 : $8>3000 ? 40 : $8>2000 ? 30 : $8>1000 ? 20 : 10) with circles title "toyota" lc rgb "red",\
					"" using 8:(stringcolumn(3) eq "mercedes"? $4:1/0):($8>4000 ? 50 : $8>3000 ? 40 : $8>2000 ? 30 : $8>1000 ? 20 : 10) with circles title "mercedes" lc rgb "green",\
					"" using 8:(stringcolumn(3) eq "honda"? $4:1/0):($8>4000 ? 50 : $8>3000 ? 40 : $8>2000 ? 30 : $8>1000 ? 20 : 10) with circles title "honda" lc rgb "black",\
					"" using 8:(stringcolumn(3) eq "ford"? $4:1/0):($8>4000 ? 50 : $8>3000 ? 40 : $8>2000 ? 30 : $8>1000 ? 20 : 10) with circles title "ford" lc rgb "purple"
					   
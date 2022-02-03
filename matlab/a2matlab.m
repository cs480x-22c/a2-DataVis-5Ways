Tf = readtable('car-data-ford.csv');
Th = readtable('car-data-honda.csv');
Tm = readtable('car-data-mercedes.csv');
Tt = readtable('car-data-toyoya.csv');
Tb = readtable('car-data-bmw.csv');


t = tiledlayout(1,1);
bubblechart(Tf.Weight,Tf.MPG,Tf.Weight,'red');
hold on
bubblechart(Th.Weight,Th.MPG,Th.Weight,'blue');
bubblechart(Tt.Weight,Tt.MPG,Tt.Weight,'yellow');
bubblechart(Tm.Weight,Tm.MPG,Tm.Weight,'green');
bubblechart(Tb.Weight,Tb.MPG,Tb.Weight,'magenta');
hold off
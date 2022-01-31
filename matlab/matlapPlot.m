tbl = readtable('cars-sample.csv'); % Read the data
sz = tbl.Weight/15;
scatter(tbl.Weight, tbl.MPG, sz, 'filled');
%gscatter(tbl.Weight, tbl.MPG, tbl.Manufacturer);
%%dont know how to get both at the same time
xlabel('Weight') 
ylabel('MPG')
xticks([2000 3000 4000 5000])
xticklabels({'2000','3000','4000','5000'})
yticks([10 20 30 40])
yticklabels({'10','20','30','40'})
alpha(.5);
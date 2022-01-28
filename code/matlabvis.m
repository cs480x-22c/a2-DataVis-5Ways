inputTable = readtable('cars-sample.csv');
col1 = inputTable(:, 3);
col2 = inputTable(:, 4);
col3 = inputTable(:, 8);
rows = size(inputTable,1);

colorMap = [zeros(rows, 1), zeros(rows, 1), ones(rows,1)];

for k= 1: rows
    if col1{k,1} == "ford"
        colorMap(k, :) = [0,0,0];
    else 
        if  col1{k,1} == "honda"
            colorMap(k, :) = [.6,.4,1.7];
        else
            if col1{k,1} == "mercedes"
                colorMap(k, :) = [1,0,0];
            else
                if col1{k,1} == "bmw"
                    colorMap(k, :) = [1,1,0];
                else 
                    colorMap(k, :) = [0,1,0];
                end
            end
        end
    end
end

scatter(inputTable.Weight, inputTable.MPG, inputTable.Weight / 40, colorMap, 'filled',...
    'MarkerFaceAlpha',.7,'MarkerEdgeAlpha',.7);
xlabel(inputTable.Properties.VariableNames{8});
ylabel(inputTable.Properties.VariableNames{3});

clear all;
clc;
%Array = readmatrix('cars-sample.csv')
%col1 = Array(:, 8);
%col2 = Array(:, 4);
%sz = Array(:, 8);
%parsing csv file
ArrayStr = readtable('cars-sample.csv');
col1 = ArrayStr{:, 8};
col2 = ArrayStr{:, 4};
sz = ArrayStr{:, 8};
c = ArrayStr{:, 3}
d = ArrayStr{:, 4};
%looping through 3rd column of the table to get colors 
Color = []
for manfctr = 1:97
    if c{manfctr} == "honda"
        Color(manfctr,:) = [0.9290 0.6940 0.1250];
    else
        if c{manfctr} == "mercedes"
            Color(manfctr,:) = [0.8350 0.0780 0.1840];
        else
            if c{manfctr} == "bmw"
                Color(manfctr,:) = [0.4660 0.6740 0.1880];
            else
                if c{manfctr} == "ford"
                    Color(manfctr,:) = [0.4940 0.1840 0.5560];
                else
                    if c{manfctr} == "toyota"
                        Color(manfctr,:) = [0.3010 0.7450 0.9330];
                    end
                end
            end
        end
    end
end


s = scatter(col1, col2, sz/5, Color,'filled');
%Setting opacity 
set(s, 'MarkerFaceAlpha', 0.5);
%Setting font size 
set (gca, 'FontSize', 20);
%Labing Axis
xlabel('Weight') 
ylabel('MPG') 
%Setting background grid
grid on % turning grid line on
%Creating Legends legends can't be done using these datatypes as matlab
%has limited legend functionality

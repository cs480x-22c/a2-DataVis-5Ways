input = readtable('/Users/henryyoder/Downloads/cars-sample.csv');
Manufacturer = input{:,3};
MPG = input{:,4};
Weight = input{:,8};
Sizes = Weight ./ 600;
Colors = [zeros(97,1),zeros(97,1),zeros(97,1)];
for i = 1:97
    if Manufacturer{i} == "bmw"
        Colors(i,:) = [1 0 0];
    else
        if Manufacturer{i} == "ford"
            Colors(i,:) = [1 1 0];
        else
            if Manufacturer{i} == "honda"
                Colors(i,:) = [0 1 0];
            else
                if Manufacturer{i} == "mercedes"
                    Colors(i,:) = [0 0 1];
                else
                    Colors(i,:) = [1 0 1];
                end
            end
        end
    end
end
bubblechart(Weight(:,1), MPG(:,1), Sizes, Colors);
xlabel("Weight");
ylabel("MPG");
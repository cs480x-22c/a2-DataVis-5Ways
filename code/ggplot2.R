library(ggplot2)
library(tidyverse) 

csv_data = read.csv("C:/Users/docto/desktop/cars-sample.csv")

ggplot(csv_data, aes(Weight, MPG)) +
  geom_point(size = Weight / 600,
             color = csv_data[,3]),
             alpha = 0.5)

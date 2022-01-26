library(ggplot2)
library(tidyverse) 

csv_data = read.csv("C:/Users/docto/desktop/cars-sample.csv")

ggplot(csv_data, aes(Weight, MPG)) +
  geom_point(size = ifelse(csv_data[,8]>4000, 8,
                           ifelse(csv_data[,8]>3000, 6,
                                  ifelse(csv_data[,8]>2000, 4, 2))),
             color = csv_data[,3]),
             alpha = 0.5)

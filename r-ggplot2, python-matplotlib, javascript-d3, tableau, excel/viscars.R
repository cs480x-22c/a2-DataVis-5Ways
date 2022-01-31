library(tidyverse)
mtcars_sample <- read.csv("r-ggplot2, python-matplotlib, javascript-d3, tableau, excel/javascript-d3/cars-sample.csv", header=TRUE)
ggplot(mtcars_sample, aes(x=Weight, y=MPG)) +
  geom_point(aes(colour=Manufacturer, size=Weight), alpha=0.5)
ggsave("img/ggplot2.png")
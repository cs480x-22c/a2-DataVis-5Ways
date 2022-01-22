# Alternatively, install just ggplot2:
install.packages("ggplot2")
library("ggplot2")
data1 <- read.csv("/Users/federicogalbiati/Documents/GitHub/a2-DataVis-5Ways/cars-sample.csv", header=TRUE, stringsAsFactors=FALSE)

ggplot(data1, aes(x = Weight, y = MPG, colour = Manufacturer, size=Weight)) +
  geom_point(alpha = 0.5)

ggsave('plot.png', width=6, height=4)
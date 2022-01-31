install.packages("ggplot2")carData <- read.csv(file = "cars-sample.csv")

ggplot(data=carData, aes(Weight, MPG, color=Manufacturer, size=Weight, alpha=5/10)) + geom_jitter()
ggsave('ggplot.png')
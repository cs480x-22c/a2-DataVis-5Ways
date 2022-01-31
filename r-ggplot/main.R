install.packages("ggplot2")
library("ggplot2")

graph <- read.csv("../cars-sample.csv", header=TRUE, stringsAsFactors=FALSE)

ggplot(data = graph,
       mapping = aes(x = Weight, y = MPG, color = Manufacturer)) + geom_point(aes(size = Weight),
       alpha = 0.5)

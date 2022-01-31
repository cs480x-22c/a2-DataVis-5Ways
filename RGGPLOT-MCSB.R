install.packages("ggplot2")
#load file
print(getwd()) #use this to make sure you are looking 
#               for the file in the right place
cars <- read.csv(file= "cars-sample.csv")
view(cars)

#visualization
library(ggplot2)
Weight <- cars[,c('Weight')]
MPG <- cars[,c('MPG')]
Car <- cars[,c('Car')]
Manufacturer <- cars[,c('Manufacturer')]
ggplot(cars, aes(x= Weight, y= MPG))+ geom_point(aes(color= Manufacturer, size= Weight), alpha=0.5)

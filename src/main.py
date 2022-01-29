import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns


def main():
    plt.style.use('ggplot')
    mtcars = pd.read_csv("../cars-sample.csv")
    cmap = {"bmw": "#f3b7b4",
            "ford": "#cdce8e",
            "honda": "#95d9bb",
            "mercedes": "#93d3f4",
            "toyota": "#eeb2f2"}
    plt.scatter(mtcars.Weight, mtcars.MPG, s=mtcars.Weight/200, c=mtcars.Manufacturer.map(cmap))
    plt.xlabel("Weight")
    plt.ylabel("MPG")
    plt.yticks(range(10, 50, 10))
    plt.legend()
    plt.show()


if __name__ == '__main__':
    main()

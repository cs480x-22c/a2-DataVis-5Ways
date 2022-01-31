import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns


def main():
    plt.style.use('ggplot')
    mtcars = pd.read_csv("public/cars-sample.csv")
    cmap = {"bmw": "#f3b7b4",
            "ford": "#cdce8e",
            "honda": "#95d9bb",
            "mercedes": "#93d3f4",
            "toyota": "#eeb2f2"}
    _, ax = plt.subplots()
    for key, group in mtcars.groupby("Manufacturer"):
        group.plot.scatter(ax=ax, x="Weight", y="MPG", label=key, color=cmap[key], alpha=0.5)
    plt.xlabel("Weight")
    plt.xticks(range(1000, 5000, 1000))
    plt.ylabel("MPG")
    plt.yticks(range(10, 50, 10))
    plt.show()


if __name__ == '__main__':
    main()

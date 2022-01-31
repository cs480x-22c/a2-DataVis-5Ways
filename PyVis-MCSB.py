
def visualize():
    #read file
    import pandas as pd
    data = pd.read_csv("cars-sample.csv")
    i=0
    colors= [0 for i in range(97)]
    for m in data.Manufacturer:
        if m == "bmw":
            colors[i]= 1
        elif m == "ford":
            colors[i]= 2
        elif m == "honda":
            colors[i]= 3
        elif m == "mercedes":
            colors[i]= 4
        elif m == "toyota":
            colors[i]= 5
        i += 1

    # make visualization
    import matplotlib.pyplot as plt
    import numpy as np

    fig,ax =plt.subplots()

    scatter = ax.scatter(data.Weight, data.MPG, c=colors, s=((data.Weight/16)-80), alpha=0.5)

    kww = dict(prop="colors", num=4, fmt=None, func= lambda n: n)
    legend1 = ax.legend(*scatter.legend_elements(**kww),loc="upper right", title="Maufacturer \n (1:bmw, 2:ford, 3:honda, 4:mercedes, 5:toyota)", ncol =3)
    ax.add_artist(legend1)
    kw = dict(prop="sizes", num=4, func=lambda s: (s+80)*16)
    legend2 = ax.legend(*scatter.legend_elements(**kw),loc="lower left", title="Size")

    plt.xlabel("Weight")
    plt.axis([1500, 5100, 8, 47])
    plt.ylabel("MPG")
    ax.set_xticks([2000, 3000, 4000, 5000])
    ax.set_xticks([1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000], minor=True)
    ax.set_yticks([10,20,30,40])
    ax.set_yticks([10, 15, 20, 25, 30, 35, 40, 45], minor=True)
    ax.grid(True, which='both')

    plt.show()
if __name__ == '__main__':
    visualize()

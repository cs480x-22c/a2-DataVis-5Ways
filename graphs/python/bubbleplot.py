import pandas as pd
import plotly.express as px

df = pd.read_csv('./data/cars-sample.csv')

df['Size'] = list(map(lambda weight: weight /2000, df.Weight))
fig = px.scatter(df, x="Weight", y="MPG",
	         size="Size", color="Manufacturer",
                  log_x=True, size_max=50,
                  color_discrete_map={'bmw' : '#e0756c',
                                      'ford': '#c3c575',
                                      'honda': '#8dd7b7',
                                      'mercedes': '#8fd2f4',
                                      'toyota': '#edb0f2',})
fig.show()
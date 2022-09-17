from tabulate import tabulate

titles = ["Planta", "sol"]
data = [
    ["Begônia rex", "sombra"],
    ["Mandevilla", "muito sol"],
    ["Monstera deliciosa", "sombra"],
    ["ripsalis", "sombra"],
    ["Cróton", "muito sol"]
]

print(tabulate(data, headers=titles, tablefmt="fancy_grid", numalign="center"))

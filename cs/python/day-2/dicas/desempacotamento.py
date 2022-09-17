x = "ab"
print(x)
x, y = "ab"
print(x, y)

# trocar valores
x, y = y, x
print(x, y)

x, *y = "felps"
print(x, y)

x, *y, z = "felps"
print(x, y, z)
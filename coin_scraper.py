# Documentation: https://pyrh.readthedocs.io/en/latest/index.html
import sys
from getpass import getpass
from pyrh import Robinhood
import matplotlib.pyplot as plt
import matplotlib.animation as animation
import time as tm
import numpy as np
import random


# username = input('Enter your username:')
# password = getpass()

# rh = Robinhood()

# rh.login(username=username, password=password)

# print(rh.get_historical_quotes("AAPL", interval="5minute", span="3hour"))
fig = plt.figure()
ax1 = fig.add_subplot(1,1,1)

price = 50
time = 0
price_array = []
five_day_array = []
ten_day_array = []
hundred_day_array = []
time_array = []
def avg(lst):
	return sum(lst)/len(lst)

def get_data():
	global price
	global time
	price = price + random.randint(-5,5)
	time = time + 1

	price_array.append(price)


	if(len(price_array) > 100):
		hundred_day_array.append(avg(price_array[-100:]))
		ten_day_array.append(avg(price_array[-10:]))
		five_day_array.append(avg(price_array[-5:]))
	elif(len(price_array) > 10):
		hundred_day_array.append(price)
		ten_day_array.append(avg(price_array[-10:]))
		five_day_array.append(avg(price_array[-5:]))
	elif(len(price_array) > 5):
		five_day_array.append(avg(price_array[-5:]))
		ten_day_array.append(price)
		hundred_day_array.append(price)
	else: 
		five_day_array.append(price)
		ten_day_array.append(price)
		hundred_day_array.append(price)

	time_array.append(time)

	return time_array,price_array,five_day_array,ten_day_array,hundred_day_array

def animate(i):


	xar,yar,y5avg,y10avg,y100avg = get_data()
	# print("animating")
	# print("\n")
	# print("CURRENT:", xar)
	# print("5AVG:", y5avg)
	# print("10AVG:", y10avg)
	# print("time:", yar)
	ax1.clear()
	ax1.plot(xar,y100avg)
	ax1.plot(xar,y10avg)
	ax1.plot(xar,y5avg)
	ax1.plot(xar,yar)

	# if(len(price_array) > 100):
	# 	ax1.plot(xar,y100avg)
	# 	ax1.plot(xar,y10avg)
	# 	ax1.plot(xar,y5avg)
	# elif(len(price_array) > 10):
	# 	ax1.plot(xar,y10avg)
	# 	ax1.plot(xar,y5avg)
	# elif(len(price_array) > 5):
	# 	ax1.plot(xar,y5avg,)


ani = animation.FuncAnimation(fig, animate, interval=100)
plt.show()
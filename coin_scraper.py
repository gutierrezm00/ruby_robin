# Documentation: https://pyrh.readthedocs.io/en/latest/index.html
import sys
from getpass import getpass
from pyrh import Robinhood
import matplotlib.pyplot as plt
import matplotlib.animation as animation
import time as tm
import numpy as np
import random


username = input('Enter your username:')
password = getpass()

rh = Robinhood()

rh.login(username=username, password=password)

# print(rh.get_historical_quotes("AAPL", interval="5minute", span="3hour"))
# rh.get_qoute("TSLA")


size = 100
last = size-1
yask = np.zeros([size])
ybid = np.zeros([size])

yfive = np.zeros([size])
yten = np.zeros([size])
yminute = np.zeros([size])

rask = rh.ask_price("TSLA")[0][0]
rbid = rh.bid_price("TSLA")[0][0]

yask[0] = rask
ybid[0] = rbid
yfive[0] = rask
yten[0] = rask
yminute[0] = rask

xar = np.zeros(size)
xfive = np.zeros(size)
xten = np.zeros(size)
xminute = np.zeros(size)

fig,(ax1,ax2,ax3,ax4) = plt.subplots(4)

def animate(i):
	global xar
	global yask
	global ybid
	global yfive
	global yten 
	global yminute 
	global xfive 
	global xten
	global xminute

	tsla_ask = rh.ask_price("TSLA")[0][0]
	tsla_bid = rh.bid_price("TSLA")[0][0]

	yask = np.roll(yask,-1)
	yask[last] = tsla_ask

	ybid = np.roll(ybid,-1)
	ybid[last] = tsla_bid

	xar = np.roll(xar,-1)
	xar[last] = i

	if(i % 5 == 0):
		yfive = np.roll(yfive,-1)
		yfive[last] = tsla_ask
		xfive = np.roll(xfive,-1)
		xfive[last] = i
	if(i % 10 == 0):
		yten = np.roll(yten,-1)
		yten[last] = tsla_ask
		xten = np.roll(xten,-1)
		xten[last] = i
	if(i % 60 == 0):
		yminute = np.roll(yminute,-1)
		yminute[last] = tsla_ask
		xminute = np.roll(xminute,-1)
		xminute[last] = i

	ax1.clear()
	ax2.clear()
	ax3.clear()
	ax4.clear()

	ax1.plot(xar,yask)
	ax1.plot(xar,ybid)

	ax2.plot(xfive,yfive)
	ax3.plot(xten,yten)
	ax4.plot(xminute,yminute)

	plt.xlabel('Time')
	plt.ylabel('Price')

	print(xar)

	print(yask)

	# if(len(price_array) > 100):
	# 	ax1.plot(xar,y100avg)
	# 	ax1.plot(xar,y10avg)
	# 	ax1.plot(xar,y5avg)
	# elif(len(price_array) > 10):
	# 	ax1.plot(xar,y10avg)
	# 	ax1.plot(xar,y5avg)
	# elif(len(price_array) > 5):
	# 	ax1.plot(xar,y5avg,)


ani = animation.FuncAnimation(fig, animate, interval=1000)
plt.show()
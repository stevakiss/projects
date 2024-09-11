import random

print ('Welcome To Your Password Generator')

chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ·‑‒–—―‗‘’‚‛”„‟•․‥…‧′″‵‶‷❛❜❝❞ʹʺʻʼ˂˃˄˅ˆˌˍˎˏ˖˗˜﹔﹕！＃＄％＆＊．：；？＠、︰0123456789'

pass_generate = input ('amount of passwords you want to generate:')
pass_generate = int(pass_generate)
length_pass = input ('What is the desired length of the password(s):')
length_pass = int(length_pass)

print ('\nYour password(s) can be found below:')

for password in range(pass_generate):
   passwords = ''
for c in range(length_pass):
   passwords += random.choice(chars)
print(passwords)

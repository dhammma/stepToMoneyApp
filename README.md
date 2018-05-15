# stepToMoneyApp

This is a sample app to show concept how it can be in exists real app.

I used `https://github.com/terrillo/rn-apple-healthkit` this npm package to use Apple Health Kit in JS for my app.
I have been investigated few ways to use in app, and this solutions was looks enough good in comparison with other solution.


There are few issues of current implementation:

1. Only iOS support. But, to enable Android support, all that needs - find enough good package for Android platform and write FitService.android.js in compatible with FitService.ios.js interface.
2. I don't understand, why, when I'm walking with app, I can't see updates immediately. Updates happens very rare. But I haven't more time to investigate it.

Another possible improvements:

1. If fix issue with immediately step updates - add animation of values changes.
2. Store data, and display total statistics and statistics for every day/week/month.
3. Display start screen immediately after app start. Currently, user should click start each time.

That's it. This app is as simple as possible for test app.

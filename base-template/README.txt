The main question is probably:

How do we even set/"install" the keyboard layout folder downloaded?

First, we'll go to chrome://extensions in your browser.
Turn on developer mode, and click "Load Unpacked".
Pick the folder in which the background.js and manifest.json exist in,
and simply load it.

Second, we go to settings.
Search keyboard, and pick "Change input settings" after arriving at the screen.
Click the "Add input methods" button, and find the name of your custom IME from the manifest.json.

Third, if you use multiple accounts,
Take note of this issue: https://bugs.chromium.org/p/chromium/issues/detail?id=1190845
The base idea is to add the language you set in the manifest.json as a "web content language" BEFORE adding the input method.





To change the code appearing in the bar and what language the layout registers itself as, we can only pick from this list: https://developers.google.com/admin-sdk/directory/v1/languages/.

Note that whenever we input an invalid value and use the IME, chrome os WILL relaunch your account. It won't break anything (except maybe get rid of something you didn't save) - unlike before when it had broken accounts (experienced that first hand LOL)

The only values that are free to change in the manifest.json are:
All instances of name,
All instances of description,
id,

and when following what is put in the link above:
language, and layouts.
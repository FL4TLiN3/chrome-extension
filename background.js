// Copyright (c) 2012 The Chromium Authors. All rights reserved.
chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.insertCSS({ file: 'style.css' }, function() {
        chrome.tabs.executeScript({ file: 'script.js' });
    });

    function getActiveTab(callback) {
        chrome.windows.getAll({ populate: true }, function(windowList) {
            for (var i = 0; i < windowList.length; i++) {
                if (windowList[i].focused) {
                    for (var j = 0; j < windowList[i].tabs.length; j++) {
                        if (windowList[i].tabs[j].active) {
                            return callback(windowList[i].tabs[j]);
                        }
                    }
                }
            }
        });
    }

});

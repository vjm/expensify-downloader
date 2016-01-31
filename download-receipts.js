var casper = require('casper').create();

var receipts = require('./receipts.json');

casper.start().each(receipts, function(self, receipt) {
    self.thenOpen(receipt.receipturl, function() {
        var utils = require('utils');
        // this.echo(this.getTitle());
        var actualreceipturl = this.getElementAttribute("#receipt .button a", "href");
        var linkextension = "." + utils.fileExt(actualreceipturl);
        var downloadLocation = "receipts/" + receipt.receiptname.trim() + linkextension;
        // this.echo(actualreceipturl + " to " + downloadLocation);
        this.download(actualreceipturl, downloadLocation);
    });
});

casper.run();
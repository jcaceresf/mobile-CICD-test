module.exports = {
  // ... otras configuraciones de Jest ...
  reporters: [
    "default",
    ["jest-html-reporters", {
      pageTitle: "Test Report",
      outputPath: "reports/test-report.html"
    }],
  ],
};

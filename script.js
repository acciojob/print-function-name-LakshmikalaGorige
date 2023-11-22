function functionName() {
  alert(arguments.callee.name);
}

// Example usage
functionName(); // Displays an alert with "functionName"

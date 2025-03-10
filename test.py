import tkinter as tk

# Create the main window
root = tk.Tk()
root.title("My First Tkinter App")
root.geometry("300x200")

# Add a label widget
label = tk.Label(root, text="Hello from Tkinter on Mac!")
label.pack(pady=50)

# Start the main event loop
root.mainloop()

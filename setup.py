import os


extensions = ".tsx", ".ts", ".json", ".html"


def find_files():
    files = []
    for root, dirs, filenames in os.walk("."):
        if "node_modules" in root:
            continue
        for filename in filenames:
            if filename.endswith(extensions):
                files.append(os.path.join(root, filename))
    return files


def replace_strings(files, replacements):
    for file in files:
        with open(file, "r+") as f:
            content = f.read()
            for cur, sub in replacements:
                content = content.replace(cur, sub)
            f.seek(0)
            f.write(content)
            f.truncate()


def main():
    project_name = ""
    while not project_name.strip():
        project_name = input("What is the name of your repository?\n>>> ")
    project_name = project_name.strip().replace(" ", "-").lower()
    proper_name = " ".join(project_name.split("-"))
    proper_name = proper_name[0].upper() + proper_name[1:]
    print(f"Setting up {proper_name}...")
    files = find_files()
    replacements = [
        ("react-skeleton", project_name),
        ("React skeleton", proper_name),
    ]
    replace_strings(files, replacements)
    os.system("npm install")
    print("\n========================================\n")
    print("Done!")
    print("Run `npm start` to start the development server.")


if __name__ == "__main__":
    main()

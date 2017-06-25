# ii2030

This website is built using Jekyll. To run it locally, you'll need to have Ruby and Jekyll installed.

### Running the server locally

Download the project files and make sure you have Jekyll installed. In the root of the project directory, run the command:

``` jekyll serve ```

In your browser, navigate to `http://localhost:4000/` to view the website.

### Editing the website content

#### Requirements

Use Git to sync your local project with the project on Github. Make sure to commit each of changes to the project directory. Use a text editor like Sublime Text or Atom to open and edit the project files.

#### What to edit

All edits should be made in the `src` folder. Don't change any of the files in the `src/_site` folder, it's deleted and replaced every time the site is rebuilt.

##### Tracks

To edit the text of a specific track, go to the track's file in the `src/_tracks` folder and make your edits to the text there. Don't change the structure of the file.

##### Data

Most of the other website content can be found in the `src/_data` folder. For example, the FAQs are in `src/_data/faqs.yml` and the participants are in `src/_data/participants.yml`. Make sure you *do not change the strucure of any of the data files*.

##### Images

Images should go in the `src/assets/images` folder, and there is a sub-folder for logos called `logos`.

The icons are saved in the `src/assets/icons` folder.

### Saving and Deploying

Once you're happy with your changes locally, commit them and push them to Github:
```
git add .
git commit -m "message about what you changed" # make this an accurate message
git push origin master
```

Then deploy with the following command:

```
git subtree push --prefix _site origin gh-pages
```


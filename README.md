# IMG BLUR making small weight img from provided img

I've created this program to make small pictures for my projects.
I use created small pictures while lazy loading pictures with better quality.

# Getting Started with IMG BLUR

First install ffmpeg.
For UBUNTU:

### `sudo add-apt-repository ppa:mc3man/trusty-media && sudo apt-get update`

### `sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 8E51A6D660CD88D67D65221D90BD7EACED8E640A`

### `sudo apt-get install ffmpeg`

## Available Scripts

You have know full path to you img files. Pictures must be in root of folder.
Set it like path_to_folder_with_images

In the project directory, you can run:

### `npm start <path_to_folder_with_images>`

or
you can build

### `npm build`

and start

### `node dist/main <path_to_folder_with_images>`


# Deployment Guide

This is a static website. It can be uploaded directly to Apache.

Example Apache document root:

```text
/var/www/html/sote/
```

Copy the full contents of the extracted `sote-command-portal-v0.6` folder into the web directory. Keep the folder structure intact.

For local review, double-click `index.html` or run:

```bash
python3 -m http.server 8000
```

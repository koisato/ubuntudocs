# Ubuntu Server setup

A step-by-step guide to installing and configuring an Ubuntu 24.04 LTS server in VirtualBox, written as a school assignment.

It covers:

- Installing Ubuntu on a **software RAID 1** (mirrored disks)
- A **static IP** address with Netplan
- **SSH** access
- A **firewall** with ufw
- A **Samba** file share
- An **Apache** web server and a **BIND9** DNS server

Every step comes with the commands, screenshots and a test to check that it works.

## Running the docs site

The docs are built with [Next.js](https://nextjs.org) and [Fumadocs](https://fumadocs.dev). The pages live in `content/docs`.

```bash
npm install
npm run dev
```

Then open http://localhost:3000/docs.

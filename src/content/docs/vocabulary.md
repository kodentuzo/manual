---
title: Vocabulary
description: The words the Kodentuzo projects share, and what each one means.
---

The Kodentuzo projects name the way an app gets from code to running after a recording studio.
The path is source → take → cassette → rack → deck. Most of it is planned, not built yet.

| Word         | What it is                                                                  |
| ------------ | --------------------------------------------------------------------------- |
| **Source**   | A project's git repository.                                                 |
| **Take**     | One commit of the source, picked by branch or tag.                          |
| **Cassette** | The container image built from a take.                                      |
| **Rack**     | The registry where cassettes are kept.                                      |
| **Deck**     | Where a project's cassette runs.                                            |
| **Label**    | The team that owns a Studio.                                                |
| **Recorder** | What builds a take into a cassette. It runs outside Studio.                 |
| **Sleeve**   | Icons, theme colours and the web manifest file, written with `tape`.        |
| **Tape**     | The app itself. `tape.json` in its source says what the app is called.      |

The repositories are named in the same spirit:

- [Studio](https://github.com/kodentuzo/studio) is the app a team runs.
- [Gear](https://github.com/kodentuzo/gear) holds the tools, such as `@kodentuzo/tape`.
- [Tones](https://github.com/kodentuzo/tones) holds themes.
- [Blanks](https://github.com/kodentuzo/blanks) holds starter templates for new apps.
- [Demos](https://github.com/kodentuzo/demos) holds finished example apps.
- [Manual](https://github.com/kodentuzo/manual) is this documentation.


# HEMENG 1.0 — File Format Specification

**Status:** Initial Project Specification  
**Version:** 1.0  
**Format identifier:** `HEMENG`  
**File extension:** `.hemeng`  
**MIME type:** `application/zip` (ZIP-compatible container)  
**Language:** English  
**Project:** HEMENG

---

## 1. Introduction

HEMENG is an interactive multimedia container format.

It is designed to package multiple media resources together with metadata and interaction rules, allowing a compatible viewer to present them as a unified experience.

HEMENG 1.0 focuses on one basic interaction:

- Display a static image.
- When the user activates the image, play a video in the same display area.
- When playback ends, return to the original image.

HEMENG 1.0 is an initial project-defined format specification. It is not an established industry standard.

## 2. Design Principles

HEMENG follows these principles:

1. Preserve original media data whenever possible.
2. Separate media resources from interaction descriptions.
3. Keep the container portable and shareable.
4. Make playback behavior consistent across compatible viewers.
5. Allow future format extensions without breaking existing files.
6. Process user media locally whenever possible.

HEMENG does not define a new image or video codec.

## 3. Container Structure

A `.hemeng` file is a ZIP-compatible archive.

A valid HEMENG 1.0 package contains the following files:

```text
example.hemeng
├── manifest.json
└── media/
    ├── cover
    └── video
```

The media files intentionally have no required filename extensions inside the archive.

Their actual media types are declared in `manifest.json`.

### 3.1 Required entries

| Entry | Requirement |
|---|---|
| `manifest.json` | Required |
| `media/cover` | Required |
| `media/video` | Required |

HEMENG 1.0 does not require additional files.

Future versions may define optional directories and resources.

## 4. Manifest

The manifest is a UTF-8 encoded JSON document named `manifest.json`.

### 4.1 Example

```json
{
  "format": "HEMENG",
  "formatVersion": "1.0",
  "createdAt": "2026-11-10T12:00:00.000Z",
  "experience": {
    "type": "image-video",
    "interaction": "click-image-to-play-in-place",
    "returnToCoverOnEnded": true
  },
  "cover": {
    "path": "media/cover",
    "name": "cover.jpg",
    "mimeType": "image/jpeg"
  },
  "video": {
    "path": "media/video",
    "name": "video.mp4",
    "mimeType": "video/mp4"
  }
}
```

The example timestamp and original filenames are illustrative.

### 4.2 Root fields

| Field | Type | Required | Description |
|---|---|---|---|
| `format` | String | Yes | Must be `HEMENG` |
| `formatVersion` | String | Yes | Must be `1.0` |
| `createdAt` | String | Yes | ISO 8601 creation timestamp |
| `experience` | Object | Yes | Interaction configuration |
| `cover` | Object | Yes | Cover image metadata |
| `video` | Object | Yes | Video metadata |

### 4.3 Experience fields

| Field | Type | Required | Value |
|---|---|---|---|
| `type` | String | Yes | `image-video` |
| `interaction` | String | Yes | `click-image-to-play-in-place` |
| `returnToCoverOnEnded` | Boolean | Yes | `true` |

These values define the required HEMENG 1.0 playback behavior.

### 4.4 Cover fields

| Field | Type | Required | Description |
|---|---|---|---|
| `path` | String | Yes | Must be `media/cover` |
| `name` | String | Yes | Original filename |
| `mimeType` | String | Yes | Image MIME type |

### 4.5 Video fields

| Field | Type | Required | Description |
|---|---|---|---|
| `path` | String | Yes | Must be `media/video` |
| `name` | String | Yes | Original filename |
| `mimeType` | String | Yes | Video MIME type |

## 5. Media Requirements

HEMENG 1.0 supports:

- One cover image.
- One video.

The container stores the original media bytes without requiring a new HEMENG-specific codec.

### 5.1 Supported media types

The initial Creator accepts browser-recognized image and video MIME types.

Examples include:

- `image/jpeg`
- `image/png`
- `image/webp`
- `image/gif`
- `video/mp4`
- `video/webm`

Actual playback depends on the codecs supported by the user's browser or device.

A compatible Viewer should report unsupported media clearly.

### 5.2 MIME fallback

If the browser does not provide a MIME type, the initial Creator uses:

- Cover: `image/jpeg`
- Video: `video/mp4`

These are fallback values, not guarantees that the underlying file uses those encodings.

## 6. Playback Behavior

A HEMENG 1.0 Viewer must implement the following behavior.

### 6.1 Initial state

When a valid package is opened:

1. Read and validate `manifest.json`.
2. Load the cover image.
3. Display the cover image.
4. Wait for user interaction.

### 6.2 Activation

When the user activates the cover image:

1. Replace the cover display with the associated video.
2. Start video playback.
3. Keep playback in the same display area.

### 6.3 Playback completion

When the video reaches its natural end:

1. Stop video playback.
2. Return to the original cover image.
3. Restore the initial viewing state.

### 6.4 Local playback

The initial Viewer may use browser object URLs to display media.

Temporary object URLs should be released when they are no longer needed.

## 7. File Size Limits

The initial HEMENG Creator and Viewer use these limits:

| Limit | Maximum |
|---|---:|
| Combined original media size | 250 MiB |
| Complete `.hemeng` package size | 300 MiB |

A Viewer should reject packages exceeding the package limit.

A Viewer should also validate the declared and actual uncompressed media sizes.

Implementations should limit archive entry counts and validate archive metadata before extracting files. Package-size checks alone do not prevent ZIP bombs.

## 8. Path and Archive Validation

A compatible Viewer must validate archive paths before accessing entries.

For HEMENG 1.0:

- `manifest.json` is the manifest entry.
- `media/cover` is the cover entry.
- `media/video` is the video entry.

Implementations must reject:

- Absolute paths.
- Path traversal such as `../`.
- Backslash-based paths.
- Duplicate required entries.
- Missing required entries.
- Invalid JSON.
- Unsupported format identifiers.
- Unsupported format versions.
- Missing or invalid required fields.

The Viewer must not trust arbitrary paths supplied by an untrusted manifest.

## 9. Versioning

The format version is represented by:

```json
{
  "format": "HEMENG",
  "formatVersion": "1.0"
}
```

The version is a string.

A Viewer that supports HEMENG 1.0 must not silently interpret an unknown version as 1.0.

Future versions may introduce:

- Additional media resources.
- Audio interactions.
- Multiple interactive regions.
- Timeline-based interactions.
- Extended metadata.
- Additional presentation modes.

These features are not part of HEMENG 1.0.

## 10. Compatibility

HEMENG 1.0 is designed for browser-based creation and viewing.

Compatibility depends on:

- ZIP archive support.
- JSON parsing.
- Browser media APIs.
- Supported image and video codecs.
- Available device memory and storage.

The file itself does not require a dedicated operating-system codec.

A compatible Viewer is required to interpret HEMENG interaction rules.

## 11. Privacy and Data Handling

The initial HEMENG Creator and Viewer process selected media locally in the browser.

The initial implementation does not require uploading media to a HEMENG server.

Implementations should clearly communicate any future network access or external resource loading.

## 12. Conformance

A HEMENG 1.0 compatible package must:

1. Use the `.hemeng` extension.
2. Be a valid ZIP-compatible archive.
3. Include all three required entries.
4. Include a valid UTF-8 JSON manifest.
5. Declare `format` as `HEMENG`.
6. Declare `formatVersion` as the string `1.0`.
7. Follow the defined media paths.
8. Declare the image-video experience.
9. Follow the defined playback behavior.

A compatible Viewer must validate the package before presenting its contents.

## 13. Current Scope

HEMENG 1.0 defines only:

**One image + one video + in-place playback.**

It does not yet define:

- Multiple video tracks.
- Audio-only experiences.
- Interactive hotspots.
- Multi-page documents.
- Animation timelines.
- Embedded scripts.
- Real-time collaboration.

These may be considered in future versions.

---

## Specification Notice

HEMENG is an independent project format under active development.

This document defines the initial HEMENG 1.0 package structure and behavior. It may be revised as implementation and compatibility testing progress.

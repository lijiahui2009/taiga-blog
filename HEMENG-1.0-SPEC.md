
# HEMENG 1.0 — File Format Specification

**Status:** Initial Project Specification  
**Version:** 1.0  
**Format identifier:** `HEMENG`  
**File extension:** `.hemeng`  
**Container:** ZIP-compatible archive  
**Language:** English  
**Project:** HEMENG

---

## 1. Introduction

HEMENG is an interactive multimedia container format.

It packages media resources together with metadata and interaction rules, allowing a compatible Viewer to present them as a unified experience.

HEMENG 1.0 defines one basic interaction:

- Display a static image.
- When the user activates the image, play a video in the same display area.
- When playback ends, return to the original image.
- Allow the user to manually return to the original image.

HEMENG 1.0 is an initial project-defined format specification. It is not an established industry standard.

## 2. Design Principles

HEMENG follows these principles:

1. Preserve original media data whenever possible.
2. Separate media resources from interaction descriptions.
3. Keep the container portable and shareable.
4. Make playback behavior consistent across compatible Viewers.
5. Allow future format extensions without breaking existing files.
6. Process user media locally whenever possible.
7. Avoid requiring a proprietary media codec.

HEMENG does not define a new image or video codec.

## 3. Container Structure

A `.hemeng` file is a ZIP-compatible archive.

A valid HEMENG 1.0 package contains exactly three entries:

```text
example.hemeng
├── manifest.json
├── media/cover
└── media/video
```

The media entries intentionally have no required filename extensions inside the archive.

Their actual media types and original filenames are declared in `manifest.json`.

### 3.1 Required entries

| Entry | Requirement |
|---|---|
| `manifest.json` | Required |
| `media/cover` | Required |
| `media/video` | Required |

HEMENG 1.0 does not permit additional archive entries.

Future format versions may define additional resources.

### 3.2 ZIP compatibility

HEMENG 1.0 uses the ZIP container structure.

Supported ZIP compression methods:

| Method | Name | Support |
|---|---|---|
| 0 | Store | Required |
| 8 | Deflate | Required |

Other compression methods are not supported by HEMENG 1.0.

ZIP64 archives are not supported.

The initial Creator uses Store mode to preserve the original media bytes without recompressing them.

A compatible Viewer may accept either Store or Deflate archives.

### 3.3 Archive entry names

Entry names must use the exact paths defined by this specification.

The archive must contain:

- `manifest.json`
- `media/cover`
- `media/video`

Duplicate entries, unknown entries, path traversal, absolute paths, and malformed paths must be rejected.

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

The timestamp and filenames are illustrative.

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

### 4.6 Manifest size

The maximum permitted uncompressed manifest size is:

**64 KiB**

A Viewer must reject a manifest exceeding this limit.

The Viewer must validate the manifest before using its metadata.

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

If the browser does not provide a MIME type, the initial Creator may use:

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

### 6.4 Manual return

The Viewer must provide a way to return to the cover while the video is playing.

When activated:

1. Stop video playback.
2. Restore the original cover image.
3. Return to the initial viewing state.

### 6.5 Local playback

The initial Viewer may use browser object URLs to display media.

Temporary object URLs should be released when they are no longer needed.

## 7. File Size Limits

The initial HEMENG Creator and Viewer use these limits:

| Limit | Maximum |
|---|---:|
| Manifest uncompressed size | 64 KiB |
| Combined original media size | 250 MiB |
| Complete `.hemeng` package size | 300 MiB |

The limits are independent.

A Viewer must reject packages exceeding the package limit.

A Viewer must also validate the declared and actual uncompressed sizes.

## 8. Archive Validation and Security

A compatible Viewer must validate the archive before extracting or presenting its contents.

### 8.1 Pre-extraction validation

Before decompression, the Viewer should inspect the ZIP structure and reject archives with:

- Invalid or missing ZIP end records.
- Invalid central directory structures.
- Unsupported compression methods.
- ZIP64 structures.
- Encrypted entries.
- Unsupported archive flags.
- Multi-disk archives.
- Duplicate entries.
- Unknown entries.
- Missing required entries.
- Invalid entry names.
- Malformed local file headers.
- Inconsistent local and central directory metadata.
- Overlapping or invalid archive data regions.

### 8.2 Entry validation

The archive must contain exactly three entries:

- `manifest.json`
- `media/cover`
- `media/video`

No additional entries are permitted in HEMENG 1.0.

The Viewer must not trust arbitrary paths supplied by an untrusted manifest.

### 8.3 Post-extraction validation

After decompression, the Viewer must:

1. Confirm that exactly three expected entries exist.
2. Validate the actual manifest size.
3. Validate the actual combined media size.
4. Compare actual sizes with the values reported during archive inspection.
5. Parse and validate the manifest.
6. Confirm that required media resources are present.

The Viewer must not rely only on ZIP metadata.

### 8.4 ZIP bomb considerations

A package-size check alone cannot prevent ZIP bombs.

A defensive implementation should inspect archive metadata before decompression and verify actual extracted sizes afterward.

Implementations should also consider memory consumption and decompression resource limits.

### 8.5 Security limitations

The initial HEMENG ZIP Guard performs structural validation and size checks.

These checks reduce risks associated with malformed archives and unexpectedly large extracted content.

They do not guarantee that every malicious file is harmless.

The initial implementation is not a complete sandbox or a full malware scanner.

Implementations should avoid executing embedded content and should not trust archive-provided paths or metadata.

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

Different Viewers may have different interface designs, but they should preserve the required playback behavior.

## 11. Privacy and Data Handling

The initial HEMENG Creator and Viewer process selected media locally in the browser.

The initial implementation does not require uploading media to a HEMENG server.

Implementations should clearly communicate any future network access or external resource loading.

## 12. Conformance

A HEMENG 1.0 compatible package must:

1. Use the `.hemeng` extension.
2. Be a valid ZIP-compatible archive.
3. Contain exactly three required entries.
4. Use supported ZIP compression methods.
5. Not use ZIP64.
6. Include a valid UTF-8 JSON manifest.
7. Keep the manifest within 64 KiB.
8. Declare `format` as `HEMENG`.
9. Declare `formatVersion` as the string `1.0`.
10. Follow the defined media paths.
11. Declare the image-video experience.
12. Keep combined original media size within 250 MiB.
13. Keep the complete package within 300 MiB.
14. Follow the defined playback behavior.

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
- Network streaming.

These may be considered in future versions.

## 14. Reference Implementation

The current project contains three main components:

| Component | Responsibility |
|---|---|
| Creator | Creates and exports `.hemeng` files |
| Viewer | Opens and presents `.hemeng` files |
| ZIP Guard | Inspects ZIP structure before extraction |

The current implementation is browser-based.

The reference implementation is not itself a formal certification authority.

Future implementations should be tested against the requirements in this document.

---

## Specification Notice

HEMENG is an independent project format under active development.

This document defines the initial HEMENG 1.0 package structure, archive constraints, validation requirements, and playback behavior.

It may be revised as implementation and compatibility testing progress.


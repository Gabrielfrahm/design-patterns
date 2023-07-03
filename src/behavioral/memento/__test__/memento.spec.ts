import { ImageEditor } from "../image-editor";
import { ImageEditorBackup } from "../image-editor-backup";

describe("memento", () => {
  test("memento", () => {
    const imageEditor = new ImageEditor("/media/image.png", "png");
    const backup = new ImageEditorBackup(imageEditor);

    backup.backup();
    expect(backup.showMementos()).toHaveLength(1);
    imageEditor.convertTo("gif");
    backup.backup();
    expect(backup.showMementos()).toHaveLength(2);
    imageEditor.convertTo("mp4");
    backup.backup();
    expect(backup.showMementos()).toHaveLength(3);

    backup.undo();
    expect(backup.showMementos()).toHaveLength(2);

    backup.undo();
    expect(backup.showMementos()).toHaveLength(1);
    expect(imageEditor).toHaveProperty("fileFormat");
    expect(imageEditor["fileFormat"]).toBe("gif");
  });
});

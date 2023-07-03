import { ImageEditor } from "./image-editor";
import { Memento } from "./memento-interface";

export class ImageEditorBackup {
  private mementos: Memento[] = [];

  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    this.mementos.push(this.imageEditor.save());
  }

  undo(): void {
    const memento = this.mementos.pop();

    if (!memento) {
      return;
    }

    this.imageEditor.restore(memento);
  }

  showMementos(): Memento[] {
    return this.mementos;
  }
}

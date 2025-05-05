-- CreateTable
CREATE TABLE "Blog" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Blog_id_key" ON "Blog"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_title_key" ON "Blog"("title");

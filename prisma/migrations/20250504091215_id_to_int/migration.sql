-- DropIndex
DROP INDEX "Blog_id_key";

-- AlterTable
CREATE SEQUENCE blog_id_seq;
ALTER TABLE "Blog" ALTER COLUMN "id" SET DEFAULT nextval('blog_id_seq'),
ADD CONSTRAINT "Blog_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE blog_id_seq OWNED BY "Blog"."id";

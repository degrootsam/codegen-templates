const { execSync } = require("child_process");

const version = process.argv[2];

if (!version || !/^v?\d+\.\d+\.\d+$/.test(version)) {
  console.error("❌ Please provide a valid semver version like v1.2.3");
  process.exit(1);
}

try {
  execSync(`git tag ${version} -m "Release ${version}"`, { stdio: "inherit" });
  execSync(`git push origin ${version}`, { stdio: "inherit" });

  console.log(`✅ Tag ${version} created and pushed.`);
} catch (err) {
  console.error("❌ Failed to create or push tag:", err.message);
  process.exit(1);
}
